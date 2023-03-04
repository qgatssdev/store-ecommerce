export default {
  name: 'products',
  title: 'Products',
  type: 'array',
  of: [
    {
      type: 'singleProduct',
      name: 'singleProduct',
    },
  ],
}
