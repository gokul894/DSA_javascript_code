
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
