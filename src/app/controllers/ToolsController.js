import * as Yup from 'yup';
import Tools from '../schemas/Tools';

class ToolsController {
  async index(req, res) {
    const { tag } = req.query;
    const tools = await Tools.find();

    if (tag) {
      const tool = await Tools.where({ tags: tag });

      if (tool.length === 0)
        return res.status(400).json({ error: 'Tag not exists!' });

      return res.json(tool);
    }

    return res.json(tools);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      link: Yup.string().required(),
      description: Yup.string().required(),
      tags: Yup.array(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const toolExist = await Tools.findOne({ title: req.body.title });

    if (toolExist) {
      return res.status(400).json({ error: 'Tool already exists!' });
    }

    const tool = await Tools.create(req.body);

    return res.json(tool);
  }

  async delete(req, res) {
    const { id } = req.params;

    const idExists = await Tools.findById(id);

    if (!idExists) return res.status(400).json({ error: 'Tool not exists.' });

    await Tools.findByIdAndDelete(id);

    return res.json();
  }
}

export default new ToolsController();
