import { Locator, Page } from "playwright/test";

export class MonsterListPage{
    readonly page: Page;
    readonly listMonsters: Locator;

    constructor(page: Page){
        this.page  = page;
        this.listMonsters = page.getByTestId("monster-card");
    }

    async getMonsterList(){
        let list : string[] = [];

        for(let i = 0; i < await this.listMonsters.count(); i++)
        {
            let monster = await this.listMonsters.nth(i).getByTestId("card-monster-name").textContent();
            if(monster != null)
            {
                list.push(monster);
            }
        }

        return list;
    }

    async deleteMonster(monsterName){
        await this.listMonsters.filter({hasText: monsterName})
                                .getByRole("button", {name: "Delete"}).click();
    }

}