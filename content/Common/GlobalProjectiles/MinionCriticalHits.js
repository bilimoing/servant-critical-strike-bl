import { MinionCriticalConfig } from '../Configs/MinionCriticalConfig.js';

export class MinionCriticalHits extends GlobalProjectile {
    ModifyHitNPC(projectile, target, modifiers) {
        if (!projectile.minion && !Terraria.ID.ProjectileID.Sets.MinionShot[projectile.type]) return;

        const config = ModContent.GetInstance(MinionCriticalConfig);
        const chance = config.CritChance / 100;
        if (Math.random() < chance) {
            modifiers.SetCrit();
        }
    }
}
