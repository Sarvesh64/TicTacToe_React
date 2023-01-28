const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  const products = [
    {title: 'Cabbage', id:1,isFruit:false},
    {title: 'Garlic', id:2,isFruit:false},
    {title: 'Apple', id:3,isFruit:true},
  ]

  export default function Profile() {
    const listItems = products.map(product =>
        <li 
        key = {product.id}
        style = {{
            color:product.isFruit ? 'red' : 'darkgreen'
        }}>
            {product.title}
        </li>
    );
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        <ul>{listItems}</ul>
        
      </>
    );
  }