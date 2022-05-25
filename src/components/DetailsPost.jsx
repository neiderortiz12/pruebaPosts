// import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { getComments } from '../services/Post.service';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DetailsPost({ post, state, handleCloseModal }) {
  const [open, setOpen] = useState(state);

  const [comments, setComments] = useState([])
  useEffect(() => {
    getComments(post.id).then(res => { setComments(res.data) })
  }, [])

  const handleClose = () => {
    setOpen(false);
    handleCloseModal();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Comentarios"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              (comments !== []) ?
                (comments.map(comment =>
                  <Card key={comment.id} sx={{ maxWidth: 345, margin: '10px 0px' }}>
                    <CardHeader
                      avatar={
                        <Avatar alt={comment.owner.firstName} src={comment.owner.picture} />
                      }
                      title={comment.owner.firstName}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {comment.message}
                      </Typography>
                    </CardContent>
                  </Card>))
                :
                (<h3>no hay comentarios</h3>)


            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
