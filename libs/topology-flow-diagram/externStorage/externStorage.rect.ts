import { Node } from '../../topology/models/node';
import { Rect } from '../../topology/models/rect';

export function flowExternStorageIconRect(node: Node) {
  node.iconRect = new Rect(0, 0, 0, 0);
}

export function flowExternStorageTextRect(node: Node) {
  node.iconTextRect = new Rect(
    node.rect.x + node.rect.width / 6,
    node.rect.y,
    (node.rect.width * 3) / 4,
    node.rect.height
  );
  node.fullTextRect = node.iconTextRect;
}
