import Tools from '../schemas/Tools';

class ToolsController {
  async index(req, res) {
    const { tag } = req.query;
    const tools = await Tools.find();

    if (tag) {
      const tool = await Tools.where({ tags: tag });

      return res.json(tool);
    }

    return res.json(tools);
  }

  async store(req, res) {
    const tool = await Tools.create(req.body);

    return res.json(tool);
  }

  async delete(req, res) {
    const { id } = req.body;

    await Tools.findOneAndDelete(id);

    return res.json();
  }
}

export default new ToolsController();
