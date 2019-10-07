import React from 'react';
import {Modal,Button} from 'react-bootstrap';

export default function MovieItemDetail(props) {
  const {title,imageUrl,synopsis,releaseDate} = props.movie;
  const [show, setShow] =React.useState(props.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        View movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Movie details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
          <img src={imageUrl} className="card-img-top pointer" alt="no image found" />
          <span  className="movieItemReleaseDate animated fadeInLeftBig">{`Releaset Date: ${releaseDate}`}</span>
         <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text"><em><b>{synopsis}</b></em></p>
         </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
