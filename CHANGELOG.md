# CU Boulder Express Admin Theme

All notable changes to this project will be documented in this file.

Repo : [GitHub Repository](https://github.com/CuBoulder/express_admin)

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- ### Color Markers: Fix Visibility in Safari/Webkit
  Previously - Safari/Webkit wasn't able to handle inserting the color dots into the options for the multi-select on the View filters and the Edit Node form, so nothing would show in the dropdown. This change adds a visual way for Webkit to handle displaying color until a more refined solution can be developed that satisfies Webkit and looks closer to the intended effect.
  
  Resolves #25 
---

- ### Adds themeing for Color Categorization on Basic Pages
  This change adds a new field to Basic Pages -- "Color Category", which allows content editors to assign color categories to Basic Pages. These colors can represent whatever you decide for your site to enable additional user-accessible filtering on the `/admin/content` View.
  
  Includes:
  - `theme` : https://github.com/CuBoulder/tiamat-theme/pull/1876
  - `profile` : https://github.com/CuBoulder/tiamat10-profile/pull/360
  - `custom_entities` : https://github.com/CuBoulder/tiamat-custom-entities/pull/245
  - `express_admin` :  https://github.com/CuBoulder/express_admin/pull/24
  
  Resolves https://github.com/CuBoulder/tiamat-theme/issues/1872
---

- ### D11 version bump
  D11 version bump
---

- ### Fixes node edit sidebar in 10.3
  Needs to be tested in 10.2, it may be broken in 10.2 and earlier. If so we should set 10.3 as the core version requirement.
  
  [Bug] Resolves CuBoulder/express_admin#17
---

- ### Updates linter workflow
  Updates the linter workflow to use the new parent workflow in action-collection.
  
  CuBoulder/action-collection#7
  
  Sister PR in: All the things
---

- ### Create developer-sandbox-ci.yml
  adding new ci workflow
---

- ### Hides Warning on Download - Form Results
  Hides the Download Form Results Warnings using CSS. There was no configuration available to hide these in the webform module and installing the `Webform XLSX` module just adds another option to the "Export Format" dropdown without removing these warning messages.
  
  Testing: 
  
  - Go to `Structure` => `Webforms` 
  - Under your webforms, pick any and `Operations` column menu => `Results`
  - `Download` under the lower secondary horizontal menu. Setting the `Export Format` to "Delimited Text" or "HTML Table" would previous warn that this is potentially unsafe, as shown:
  
  ![image](https://github.com/CuBoulder/express_admin/assets/85851903/89d1b793-e697-42c7-b359-5011464c6cf8)
  
  
  Resolves https://github.com/CuBoulder/tiamat-theme/issues/758
---

- ### Removes Media Library vertical tab styling
  Resolves CuBoulder/express_admin#12
---
