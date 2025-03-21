# CU Boulder Express Admin Theme

All notable changes to this project will be documented in this file.

Repo : [GitHub Repository](https://github.com/CuBoulder/express_admin)

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
