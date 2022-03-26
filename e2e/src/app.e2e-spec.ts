import { AppPage } from './app.po';
//import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('muestra un mensaje en el Home', async() => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Hola, comencemos!!!');
  });

  /* afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  }); */
});
