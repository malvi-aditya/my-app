import SyntaxHighlighter from 'react-syntax-highlighter'

const NestedComments = () => {
  return (
    <>
      <h5>Nested Comments: </h5>
      <ul>
        <li>
          In popular websites, like reddit, youtube recently etc, the comments
          are usually in a nested structure. Like in reddit, we can reply to any
          comment and it creates a thread/nesting. Multiple replies to a same
          comment form a thread (comments are one below the other), creating a
          new reply to comment creates a new layer/level of nesting (comment
          will be indented towards right side).
          <SyntaxHighlighter language='javascript'>
            {`
              const data = [
                {
                  user: "Aditya",
                  comment: "Test comment",
                  replies: [
                    {
                      user: "User A",
                      comment: "Test comment",
                      replies: [
                        {
                          user: "User B",
                          comment: "Test comment",
                          replies: [
                            {
                              user: "User B",
                              comment: "Test comment",
                              replies: [.....  ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      user: "User B",
                      comment: "Test comment",
                      replies: []
                    }, 
                  ]
                },
                {
                  user: "User A",
                  comment: "Test comment",
                  replies: [
                    {
                      user: "Aditya",
                      comment: "Test comment",
                      replies: []
                    }
                  ] 
                },
                {
                  user: "User B",
                  comment: "Test comment",
                  replies: []
                },
              ]
            `}
          </SyntaxHighlighter>
          → The above is one way of storing data, comments on a post are stored
          as an array of objects where each object is a comment. Each comment
          will have its metadata, and mainly its replies, which is again an
          array of the same objects like our main parent array. Now, this makes
          nesting possible at multiple levels, the replies of a comment is an
          array of comments (like main parent array) and then each object again
          will have a key "replies" and so on.
        </li>
        <li>
          To display this on UI, we will need recursion. Our component
          CommentBox, accepts an array of comments and displays it. Replies to a
          comment is also an array of comments, so now we can reuse the
          CommentBox component to display the replies.
          <SyntaxHighlighter language='javascript'>
            {`
              // Takes our above comments array data 
  
              function CommentBox ( { data } ) {
                return (
                  <>
                    {data.map((comment, index) => (
                        <>
                          <DisplayComment title={comment.user} comment={comment.comment} />
                          <div> 
                            {comment.replies && <CommentBox data={comment.replies} />}     // pass the replies of a comment if present, recursively show replies 
                          </div>. 
                        </>
                      )
                    )}
                  </>
                )
              }
            `}
          </SyntaxHighlighter>
        </li>
      </ul>
    </>
  )
}

export default NestedComments
