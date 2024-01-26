# express-admin
Drupal 10+ administration theme for CU Boulder Web Express sites

## Installation
Add below to `composer.json` require section:
````
"cu-boulder/express_admin" : "dev-main"
````

Add to repositories section:
````
{
    "type": "git",
    "url" : "https://github.com/CuBoulder/express_admin.git"
}
````

**Note:** This theme is installed and set as the default with the profile. The theme is not intended to be used without the profile or other `cu-boulder/*` modules.

> To install a local version of Express, follow the steps outlined in the
> [tiamat-project-template](https://github.com/CuBoulder/tiamat-project-template)

---
## Linting

We are using stylelint and eslint

````
npm install          # install linters
npm run stylelint    # lint css
npm run eslint       # lint js
````
Linting is run automatically on all pull requests, however you can lint files locally too.
- configure eslint in `.eslintrc.json`
- configure styleint in `.stylelint.json`

---
## Directory Structure

### .github Directory
Contains the github actions workflow for linting

### config
Contains the default values for the theme settings. If new theme settings are added, update boulder_base.settings.yml with the default values. You can get the configuration by running `lando drush config-get boulder_base.settings` and copying the output into the file.

### css
- put styles relating the custom paragraphs in css/paragraphs
- put styles from the styleguide in css/styleguide

### js
Put JavaScript files here

### templates
Twig template overrides go here including those for the custom page and paragraph types. The packages dedicated to the page and paragraph types should only contain config.

### express_admin.info.yml
- Define regions
- Add styles to the ckeditor
- Add globally included libraries

### express_admin.libraries.yml
Define libraries

### express_admin.theme
Add theme hooks

