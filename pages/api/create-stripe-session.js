const stripe = require('stripe')('sk_test_51MZbJHB1DfwD5KqSR9xxD34GsISv6Bq0MWtOBpb7TcCo0bHWhlJmaltUIR10YBJwb0FlvJLN09PYiJ2aeT1foufB00hiDWqkBI');

async function CreateStripeSession(req, res) {
  const { item } = req.body;

  console.log(item)

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:9009'
      : 'https://next-js-car-rental-mui.vercel.app';

  const transformedItem = {
    price_data: {
      currency: 'usd',
      product_data: {
        // images: item.images,
        name: item.name || 'test Product',
      },
      unit_amount: item.price * 100 || 100*199,
    },
    quantity: item.quantity || 1,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
    metadata: {
      images: item.images,
    },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
