class CrudService {
  constructor(model) {
    this.model = model;
  }

  async getAll(req, res) {
    try {
      const items = await this.model.find({});
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await this.model.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Element introuvable' });
      }
      res.json(item);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async create(req, res) {
    const item = new this.model(req.body);
    try {
      const newItem = await item.save();
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const item = await this.model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) {
        return res.status(404).json({ message: 'Element introuvable' });
      }
      res.json(item);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const item = await this.model.findByIdAndDelete(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Element introuvable' });
      }
      res.json({ message: 'Supprimé avec succes' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = CrudService;