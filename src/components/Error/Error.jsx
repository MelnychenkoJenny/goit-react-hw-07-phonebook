import EmptyImg from './errorImg.png'

export const Error = ({ error }) => {
  return (
    <div>
      <p
        style={{
          textAlign: 'center',
        }}
      >
        Ooops... Something went wrong. {error} Try again later. 🙄
      </p>
      <img  src={EmptyImg} alt="emptyImageCat"  style={{
        marginTop: '15px',
          width: '170px',
          margin: '0 auto',
        }}/>
    </div>
  );
};
