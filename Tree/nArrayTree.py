
# creating n array tree Node
class Node:
    def __init__(self, val=None, children=None) -> None:
        self.val = val
        if children == None:
            self.children = []
        else:
            self.children = children
            
    
# it's outer function for traversing inorder
def inorder(root):

    def help(root, ans):
        if not root: return ans
        ans.append(root.val)
        for child in root.children:
            help(child, ans)
        return ans
    return help(root, [])


    
# postOrder traversal
def post_order(root):
    ans = []
    def help(root):
        if not root: return ans
        for child in root.children:
            help(child)
        ans.append(root.val)
    help(root)
    return ans


# inorder traversel
def inorder(root):
    if root is None:
        return []
    
    result = []
    def traverse(node):
        if node is None:
            return
        n = len(node.children)
        for i in range(n // 2):
            traverse(node.children[i])
        result.append(node.val)
        for i in range(n // 2, n):
            traverse(node.children[i])
    
    traverse(root)
    return result


# adding data to make n array tree
root = Node(1, 
            [
                Node(2), 
                Node(3, [
                    Node(6),
                    Node(7, [
                            Node(11, [
                                Node(14)
                            ])
                        ])
                ]),
                Node(4, [
                        Node(8, [
                            Node(12)
                            ])
                    ]),
                Node(5, [
                    Node(9, [
                        Node(13)
                        ]), 
                        Node(10)
                    ])
            ])


result = inorder(root)

print(result)
