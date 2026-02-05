export class EcoFzpage{
    constructor(page){
        this.page=page;
        this.image=page.locator("//a[text()='Chinese Collard Co-Ord Set'][1]").first()
        this.second=page.locator("//div[@class='bread-inner']//ancestor::div[@class='breadcrumbs']//following::section[@class='shop single section']//descendant::div[@class='product-gallery']//following::div[@class='product-des']//descendant::button[@class='btn']")

    }
    async visiturl(){
        await this.page.goto("https://www.ecofazindia.com/")
    }
    async image(){
        await this.image.click();
        
    }
    async secondimage(){
        await this.second.click()
        await this.second.waitForEvent();
        
    }
}