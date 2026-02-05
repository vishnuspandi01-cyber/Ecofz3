import {test,expect} from "@playwright/test"

import { EcoFzpage } from "../Pages/EcofzPage"

test("ecoFz",async({page})=>{
    const eco = new EcoFzpage(page);
    await eco.visiturl()
    await eco.image.click()
uyguyfviuuyco8hgiuvgkufvlibuykvcl9iuhiluygv
})
