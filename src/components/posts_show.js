import React,{Component} from 'react';
import {fetchPost,deletePost} from '../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
    }

    onDelete(){
        const {id} = this.props.match.params;
        this.props.deletePost(id,()=> {
            this.props.history.push('/');
        });
    }

    render(){
        const{post} =  this.props;
        if(post){
            return  (
                <div>
                    <Link to="/">Back to Index</Link>
                    <button 
                        className="btn btn-danger pull-xs-right"
                        onClick={this.onDelete.bind(this)}
                    >
                        Delete Post
                    </button>
                    <h3>{post.title}</h3>
                    <h6>{post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            );
        }else{
            return <div>Loading...</div>
        }
        
    }
}

function mapStateToProps(state,ownProps){
    return {post:state.posts[ownProps.match.params.id]};
} 

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);