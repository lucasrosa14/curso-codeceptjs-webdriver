Feature('Upload File');

Scenario('Fazer upload de imagem',  ({ I }) => {
    I.amOnPage('/contact_us')
    I.fillField('name', 'Lucas Rosa')
    I.fillField('email', 'lucas.trier91@gmail.com')
    I.fillField('subject', 'Teste de upload')
    I.fillField('#message', 'Teste de upload de arquivo com codeceptjs')
    
    I.attachFile('upload_file', 'images/teste.jpg')

    I.click('submit')
});
