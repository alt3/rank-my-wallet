# Contributions Welcome

## Contributor Covenant

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

You can view the latest version of the Contributor Covenant [here](https://www.contributor-covenant.org/version/2/1/code_of_conduct).

## PR Guidelines

- Scope pull requests (related changes only)
- Make sure [existing tests](./test) pass
- Add new tests if new functionality is added
- For UI changes, point to preview environment for your PR

## Requirements

```
npm run lint
npm run test
npx tsc
```

## Translations

Translators do not require any coding skills because we use the [Crowdin online editor](https://support.crowdin.com/online-editor/) for all our translations.

### Join RankMyWallet on Crowdin

1. Create a [Crowdin](https://crowdin.com/) account

2. Search for the `rankmywallet` project

   ![Screenshot of Crowdin project search](./docs/img/crowdin-search-project.png)

3. Join the `rankmywallet` project by pressing the `Join` button

### Request a new language

If the language you want to translate is not yet available, please create a [Crowdin discussion](https://crowdin.com/project/rankmywallet/discussions) as shown below so we can:

1. Technically enable the language

2. Pre-translate it for you

Once the language is active, you will receive an email and can start working on the translation.

![Screenshot of Crowdin discussion for new language](./docs/img/crowdin-request-new-language.png)

### Update existing translations

To update an existing translation:

1. First select the language you want to update

   ![Screenshot of Crowdin select language](./docs/img/crowdin-select-language.png)

2. Open the translation editor by pressing the `Translate All` button

3. Find and select the translation string you want to update

4. After you have updated the translation string, press the `Save` button

   ![Screenshot of Crowdin translation editing](./docs/img/crowdin-edit-translation.png)

5. That's it, no further action required. Crowdin will automatically create a Pull Request after your suggested changes have been approved.

> For more details about the online editor please visit this [Crowdin documention page](https://support.crowdin.com/enterprise/online-editor/).

### Questions

If you need assistance or have any questions, please contact as via the [Crowdin discussions](https://crowdin.com/project/rankmywallet/discussions).
