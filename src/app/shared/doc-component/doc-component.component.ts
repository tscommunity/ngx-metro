import '@angular/compiler';
import {
  Compiler,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Input,
  ModuleWithComponentFactories,
  NgModule,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  accentDictionary,
  activityDictionary,
  activityStyleDictionary,
  animationDictionary,
  buttonShapeDictionary,
  buttonSpecialDictionary, colorDictionary,
  easingDictionary,
  fileReadModeDictionary,
  gravatarDictionary,
  iconDictionary, inputDictionary, NgxMetroModule,
  popoverTriggerDictionary,
  positionBaseDictionary,
  positionDictionary,
  positionHorizontalDictionary,
  positionVerticalDictionary,
  progressTypeDictionary,
  roundTypeDictionary,
  sizeDictionary,
  spinnerButtonPositionDictionary,
  thinDictionary,
  widePointDictionary
} from 'ngx-metro';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-doc-component',
  templateUrl: './doc-component.component.html',
  styleUrls: ['./doc-component.component.less']
})
export class DocComponentComponent implements OnInit, OnChanges {
  @Input() header: string;
  @Input() description: string;
  @Input() showModel: boolean;

  @Input() values: any;

  html: string;
  @ViewChild('container', {read: ViewContainerRef, static: true}) container: ViewContainerRef;
  @ViewChild('htmlElement', {static: true}) htmlElementRef: ElementRef;

  languages: { lang: string, content: string }[];
  @ViewChild('langElement', {static: true}) langElementRef: ElementRef;

  private componentRef: ComponentRef<any>;
  model: any;


  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private compiler: Compiler) {
  }

  compileTemplate() {
    if (this.langElementRef.nativeElement.innerText) {
      this.languages = this.langElementRef.nativeElement.innerText
        .split('\\f:(')
        .filter(v => !!v.trim())
        .map(v => ({
          lang: ('\\f:(' + v).match(/\\f:\((.*?)\)/)[1],
          content: v.substr(v.indexOf(')') + 1).split('\\n').map(l => {
              return l.trim().split('\\t').map(iv => iv.trim()).join('  ');
            }).join('\n')
        }));

    }

    if (this.htmlElementRef.nativeElement.innerText) {
      const values = this.htmlElementRef.nativeElement.innerText.split('\\n');
      const html = values.map(v => `<span class="p-1">${v}</span>`).join('\n')
        .split('\\l').join('').split('\\t').join('').split('\\i').join('');

      this.html = values.map(v => v.trim()).map(v =>
        v.split('\\l').map(vInner => vInner.trim()).join('\n')
          .split('\\t').join('  ')).join('\n')
        .split('\\i').filter((v, i) => i % 2 === 0).join('');

      const factory = this.createComponentFactorySync(this.compiler, html);

      if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
      }

      this.componentRef = this.container.createComponent(factory);
      this.model = this.componentRef.instance.model;
    }
  }

  ngOnInit() {
    this.compileTemplate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.compileTemplate();
  }

  private createComponentFactorySync(compiler: Compiler, template: string): ComponentFactory<any> {
    const inputValues = this.values;

    class RuntimeComponent {
      buttonShapeDictionary = buttonShapeDictionary;
      buttonSpecialDictionary = buttonSpecialDictionary;
      iconDictionary = iconDictionary;
      colorDictionary = colorDictionary;
      animationDictionary = animationDictionary;
      accentDictionary = accentDictionary;
      widePointDictionary = widePointDictionary;
      positionHorizontalDictionary = positionHorizontalDictionary;
      positionVerticalDictionary = positionVerticalDictionary;
      positionBaseDictionary = positionBaseDictionary;
      positionDictionary = positionDictionary;
      sizeDictionary = sizeDictionary;
      activityDictionary = activityDictionary;
      gravatarDictionary = gravatarDictionary;
      activityStyleDictionary = activityStyleDictionary;
      popoverTriggerDictionary = popoverTriggerDictionary;
      progressTypeDictionary = progressTypeDictionary;
      roundTypeDictionary = roundTypeDictionary;
      thinDictionary = thinDictionary;
      easingDictionary = easingDictionary;
      inputDictionary = inputDictionary;
      spinnerButtonPositionDictionary = spinnerButtonPositionDictionary;
      fileReadModeDictionary = fileReadModeDictionary;

      constructor() {
        if (inputValues) {
          Object.keys(inputValues).forEach((k) => {
            (<any>this)[k] = inputValues[k];
          });
        }
      }
    }
    const decoratedComponent = Component({
      selector: 'doc-runtime-component',
      template: template
    })(RuntimeComponent);

    class RuntimeComponentModule { }

    const decoratedModule = NgModule({
      imports: [CommonModule, NgxMetroModule, FormsModule, ReactiveFormsModule],
      declarations: [decoratedComponent]
    })(RuntimeComponentModule);

    const module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(decoratedModule);
    return module.componentFactories.find(f => f.componentType === decoratedComponent);
  }
}
