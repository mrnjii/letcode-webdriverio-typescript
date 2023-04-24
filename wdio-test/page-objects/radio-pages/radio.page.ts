import Page from '../page.js';

class RadioPage extends Page {

    get firstRadioOption(){ return $(`//input[@id='yes']`) };
    get radioOneOption(){ return $(`//input[@id='one']`) };
    get radioTwoOption(){ return $(`//input[@id='two']`) };

    //1. select one radio option
    async selectFirstRadio(){
        const elmFirstRadioOption = await this.firstRadioOption;
        await this.click(elmFirstRadioOption);
    }

    async verifySelectedFirstRadio(){
        const elmFirstRadioOption = await this.firstRadioOption;
        const radioStatus = await elmFirstRadioOption.isSelected();
        console.log('First Radio Status: ' + radioStatus);
    }

    //2. verify that only one radio is selected
    async selectRadioOne(){
        const elmRadioOneOption = await this.radioOneOption;
        await this.click(elmRadioOneOption);
    }

    async verifyRadioOne(){
        const elmRadioOneOption = await this.radioOneOption;
        const elmRadioTwoOption = await this.radioTwoOption;
        await expect(elmRadioOneOption).toBeSelected();
        await expect(elmRadioTwoOption).not.toBeSelected();
    }

    async selectRadioTwo(){
        const elmRadioTwoOption = await this.radioTwoOption;
        await this.click(elmRadioTwoOption);
    }

    async verifyRadioTwo(){
        const elmRadioOneOption = await this.radioOneOption;
        const elmRadioTwoOption = await this.radioTwoOption;
        await expect(elmRadioTwoOption).toBeSelected();
        await expect(elmRadioOneOption).not.toBeSelected();
    }

}

export default new RadioPage();
