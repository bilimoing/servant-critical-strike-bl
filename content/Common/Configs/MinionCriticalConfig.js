export class MinionCriticalConfig extends ModConfig {
    static Options = {
        CritChance: ModConfig.Range(0, {
            min: 0,
            max: 100,
            step: 1,
            suffix: '%'
        })
    };
}
