# QApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## Environment

Application was built with:

    - Angular 14.2.12
    - Angular CLI version: 14.2.10.
    - NodeJS version: v16.10.0.
    - NPM version: 8.1.2 

## Folder structure

    node_modules/
    src/
        app/
            components/
            pipes/
            services/
        assets/
            scss/
        environments/    

    * src/app/components/ - All building components should be in this folder. Naming should be as: 
            class naming: SomeCustomNameComponent
            file naming: some-custom-name.component.ts    

    * src/app/services/ - All services should be in this folder. Naming should be as: 
            class naming: SomeCustomNameService
            file naming: some-custom-name.service.ts 

    * src/app/pipes/ - All pipes should be in this folder. Naming should be as: 
            class naming: SomeCustomNamePipe
            file naming: some-custom-name.pipe.ts      

    * assets/* - This folder contains all global *.scss files, fonts, images and other content.

    * environments/* - Contains *.ts files that define environmental variables.                                        

    * node_modules/* - Contains all npm packages.

## Coding instructions

Creation of new item:
    Use Angular IDE to create new component in specified folder (File -> New -> Component). You can also use same approach for directive|pipe|service|class|guard|interface|enum.
    As alternative you can run `ng generate component components/component-name` to generate a new component. You can also use same approach for directive|pipe|service|class|guard|interface|enum|module.

    NOTE: Keep folder structure logic when creating some new item.

## Styles:
    - src/assets/scss/*.scss - all generic scss files should be here

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
