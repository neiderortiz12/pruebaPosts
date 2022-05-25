import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { FenceSharp } from '@mui/icons-material';
import DetailsPost from './DetailsPost';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({post}) {
  const [expanded, setExpanded] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const fecha = (fecha) => {
      const date = new Date(fecha)
      return date.toDateString()
  }
  const handleCloseModal = () => {
    setOpen(!open);
}

  return (
    <Card sx={{ maxWidth: 345, margin: '10px 0px' }} onClick={() => handleClickOpen()}>
      <CardHeader
        avatar={
          <Avatar alt={post.owner.firstName} src={post.owner.picture} />
        }
        title={post.owner.firstName}
        subheader={fecha(post.publishDate)}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.image}
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
          {post.tags?.map((tag, index) => <Chip key={index} label={tag} />)}
      </CardContent>
      {
          open && <div><DetailsPost post={post} state={open} handleCloseModal={handleCloseModal}/></div>
      }
    </Card>
  );
}