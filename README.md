# ngx-metro

Angular UI components in modern ui style.

[Documentation](https://tscommunity.github.io/ngx-metro/#/)

![Screenshot](https://raw.githubusercontent.com/tscommunity/ngx-metro/master/projects/ngx-metro/ngx-metro%20screenshot.PNG)

See metro4 for more details:
[Metro4](https://metroui.org.ua/)

ngx-metro on npm: 
[ngx-metro](https://www.npmjs.com/package/ngx-metro)

## Installation

### Install using Angular CLI:

````
ng add ngx-metro
````

### Import module:

Add NgxMetroModule to your imports:


````
import { NgxMetroModule } from 'ngx-metro';
...

imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  NgxMetroModule,
  ...
]
````

### Generate layout

````
ng g ngx-metro:layout
````


## Usage

Check out the [Documentation](https://tscommunity.github.io/ngx-metro/#/)

## Author

[tscommunity](https://github.com/tscommunity)

## Compilation

If compilation encounters error `Error: error:0308010C:digital envelope routines::unsupported`, check out the solution [Enable legacy OpenSSL provider](https://stackoverflow.com/a/69699772/1299702)
