import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://image.hm.com/assets/hm/f7/1e/f71e4b244b50a5005877b4227c7e6b608012cae1.jpg?imwidth=396",
      title: "Woven Scarf",
      price: 11.20
    },
    {
      image:
        "https://image.hm.com/assets/hm/ad/41/ad411b5189417dda95283a16fc46f78b202ffd18.jpg?imwidth=396",
      title: "Rib-Knit Arm Warmers",
      price: 6.40,
    },
    {
      image:
        "https://image.hm.com/assets/hm/c3/f8/c3f83bedf0c832ea39ce1efd1597ca56c4b3db51.jpg?imwidth=396",
      title: "Fluffy-Knit Bucket Hat",
      price: 12.00,
    },
    {
      image:
        "https://image.hm.com/assets/hm/ae/2f/ae2fabdef12b6b84b8c61db1aeb8270f9f418357.jpg?imwidth=820",
      title: "Suede Ankle Boots",
      price: 70.48,
    },
    {
      image:
        "https://image.hm.com/assets/hm/e1/8f/e18fd5b7cfffcb22a1b0bf6164857a4a8ee934e6.jpg?imwidth=384",
      title: "Hoodie",
      price: 20.9 ,
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
