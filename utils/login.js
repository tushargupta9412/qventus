import testIds from './testIds.json';

export const login = async ({
    page,
    emailId,
    password
}) => {
    await page.locator(testIds.emailInputId).fill(emailId);
    await page.locator(testIds.nextButton).click();
    await page.locator(testIds.passwordInputId).fill(password);
    await page.locator(testIds.signInButton).click();
};