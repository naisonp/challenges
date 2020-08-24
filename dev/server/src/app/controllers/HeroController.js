import Hero from "../models/Hero";

class HeroController {
  async store(req, res) {
    try {
      const hero = await Hero.create(req.body);
      return res.json(hero);
    } catch (error) {
      return res.status(400).send({
        error: true,
        message: 'Erro ao cadastrar o herói',
        type: 'error'
      });
    }
  }

  async delete(req, res) {
    try {
      await Hero.findByIdAndDelete(req.params.id);
      const listHeroes = await Hero.find();
      return res.json(listHeroes);
    } catch (error) {
      return res.status(400).send({
        error: true,
        message: 'Erro ao deletar herói',
        type: 'error'
      });
    }
  }

  async update(req, res) {
    const hero = await Hero.findById(req.params.id);
    try {
      if (!hero) {
        return res.status(400).json({ mensage: 'Heroi não existe' });
      }
      await hero.set(req.body);
      await hero.save();
      const listHeroes = await Hero.find();
      return res.json(listHeroes);
    } catch (error) {
      return res.status(400).send({
        error: true,
        message: 'Erro ao editar herói',
        type: 'error'
      });
    }
  }

  async list(req, res) {
    try {
      const listHeroes = await Hero.find();
      return res.json(listHeroes);
    } catch (error) {
      return res.status(400).send({
        error: true,
        message: 'Erro ao buscar heróis',
        type: 'error'
      });
    }
  }

  async index(req, res) {
    try {
      const hero = await Hero.findById(req.params.id);
      return res.json(hero);
    } catch (error) {
      return res.status(400).send({
        error: true,
        message: 'Erro ao buscar herói',
        type: 'error'
      });
    }
  }
}

export default new HeroController();
