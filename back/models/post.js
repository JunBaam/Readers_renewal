module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      bookinfo: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.STRING(40),
      },
      publisher: {
        type: DataTypes.STRING(40),
      },
      title: {
        type: DataTypes.STRING(40),
      },
      category: {
        type: DataTypes.STRING(40),
      },
      author: {
        type: DataTypes.STRING(40),
      },
      date: {
        type: DataTypes.STRING(40),
      },
      rating: {
        type: DataTypes.STRING(10),
      },
      image_url: {
        type: DataTypes.STRING(200),
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
    }
  )
  Post.associate = db => {
    db.Post.belongsTo(db.User) // post.addUser, post.getUser, post.setUser
    db.Post.hasMany(db.Comment) // post.addComments, post.getComments
    db.Post.hasMany(db.Image) // post.addImages, post.getImages
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }) // post.addLikers, post.removeLikers
  }
  return Post
}
