import { Router } from 'express';
import { Item } from '../types/item';

const router = Router();

let items: Item[] = [
  { id: 1, name: 'Item1', description: 'It is Item1' },
  { id: 2, name: 'Item2', description: 'It is Item2' },
  { id: 3, name: 'Item3', description: 'It is Item3' },
  { id: 4, name: 'Item4', description: 'It is Item4' },
  { id: 5, name: 'Item5', description: 'It is Item5' },
];

// Get all items
router.get('/', (req, res) => {
  res.json(items);
});

// Get a single item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find((i) => i.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Create a new item
router.post('/', (req, res) => {
  const newItem: Item = req.body;
  newItem.id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update an existing item
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Delete an item
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = items.findIndex((i) => i.id === id);
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

export default router;
