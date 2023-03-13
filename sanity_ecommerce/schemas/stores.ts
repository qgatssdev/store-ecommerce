export default {
  name: 'stores',
  title: 'Stores',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'storeName',
      title: 'StoreName',
      type: 'string',
    },
  ],
}
