import Battle from '../models/Battle';
import Hero from '../models/Hero';
import Utils from '../../utils';
import socket from '../../services/socket';

class BattleController {
  async index(req, res) {
    const battles = await Battle.find();
    let battlesorder = battles.sort((a, b) => b.createdAt - a.createdAt)
    return res.json(battlesorder);
  }

  async update(req, res) {
    const battle = await Battle.findById(req.params.id);
    battle.set({
      active: false
    });
    await battle.save();
    const listBattle = await Battle.find();

    return res.json(listBattle);
  }

  async store(occurrence) {
    const classMonster = Utils.classMonster(occurrence.dangerLevel);
    const hero = await Hero.findOne().where({ class: classMonster, allocated: false });
    if (hero != null) {
      await Battle.create({
        heroName: hero.name,
        classHero: hero.class,
        dangerLevel: occurrence.dangerLevel,
        monsterName: occurrence.monsterName,
        createdAt: Date.now(),
        active: true,
        latitude: occurrence.location[0].lat,
        longitude: occurrence.location[0].lng,
      });

      await hero.set({
        allocated: true
      });

      await hero.save();

      socket.emit('hero', hero);
    }
  }
}

export default new BattleController();
