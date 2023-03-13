export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'headerImage',
      title: 'HeaderImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shoes',
      title: 'Shoes',
      type: 'document',
      fields: [
        {
          name: 'shoeImage',
          title: 'ShoeImage',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'shirts',
      title: 'Shirts',
      type: 'document',
      fields: [
        {
          name: 'shirtImage',
          title: 'ShirtImage',
          type: 'image',
          options: {
            hotspot: true,
          },
          to: [
            {
              type: 'shirts',
            },
          ],
        },
      ],
    },
    {
      name: 'trousers',
      title: 'Trousers',
      type: 'document',
      fields: [
        {
          name: 'trouserImage',
          title: 'trouserImage',
          type: 'image',
          options: {
            hotspot: true,
          },
          to: [
            {
              type: 'trousers',
            },
          ],
        },
      ],
    },
    {
      name: 'shorts',
      title: 'Shorts',
      type: 'document',
      fields: [
        {
          name: 'shortImage',
          title: 'ShortImage',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'tracksuits',
      title: 'Tracksuits',
      type: 'document',
      fields: [
        {
          name: 'tracksuitImage',
          title: 'tracksuitImage',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'socks',
      title: 'Socks',
      type: 'document',
      fields: [
        {
          name: 'sockImage',
          title: 'SockImage',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'underwear',
      title: 'Underwear',
      type: 'document',
      fields: [
        {
          name: 'underwearImage',
          title: 'UnderwearImage',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'gymWear',
      title: 'GymWear',
      type: 'document',
      fields: [
        {
          name: 'gymWearImage',
          title: 'GymWearImage',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
