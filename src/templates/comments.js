import React from 'react'
import ReactDisqusComments from 'react-disqus-comments';


class Comments extends React.Component {
  handleNewComment(comment) {
    console.log(comment);
  }

  render() {
    return (
      <div>
        <ReactDisqusComments
          shortname="beace"
          identifier="blog-beacelee-com"
          title={this.props.title}
          url="https://blog.beacelee.com"
          category_id=""
          onNewComment={this.handleNewComment}
        />
      </div>
    );
  }
}

export default Comments;