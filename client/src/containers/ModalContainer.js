import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions/modalActions'
import ModalImage from '../components/Modal/Modal_Image'
import ModalDetail from '../components/Modal/Modal_Detail'

class Modal extends Component {
    showImage = (content) => {
        
        if(content){
            const images = content.images
            return <ModalImage images={images}/>
        }
        return "Loading Image ..."
    }
    showDetail = (detail) => {
        if(detail){
            return <ModalDetail detail={detail}/>
        }
        return "Loading Detail ..."
    }
    close = () => {
        this.props.closeModal()
    }
    render() {
        const { display, content } = this.props
        return (
            <div className="modal fade show"  style={{display}}>
                <div className="modal-dialog" role="document" style={{margin: '8% auto 8%'}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.close}><span className="ti-close" aria-hidden="true" /></button>
                        </div>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                {this.showImage(content)}
                                {this.showDetail(content)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        display: state.modal.display,
        content: state.modal.content
    }
}
export default connect(mapStateToProps, actions)(Modal);