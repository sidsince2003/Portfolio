// schemaTypes/blog.js
export default {
    name: 'blog',
    title: 'Blog Posts',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string'
          }
        ]
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime'
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        description: 'Brief summary of the blog post',
        type: 'text',
        rows: 3
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
              {title: 'Normal', value: 'normal'},
              {title: 'Heading 1', value: 'h1'},
              {title: 'Heading 2', value: 'h2'},
              {title: 'Heading 3', value: 'h3'},
              {title: 'Quote', value: 'blockquote'}
            ],
            marks: {
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
                {title: 'Code', value: 'code'},
                {title: 'Underline', value: 'underline'}
              ],
              annotations: [
                {
                  title: 'URL',
                  name: 'link',
                  type: 'object',
                  fields: [{
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }]
                }
              ]
            }
          },
          {
            type: 'image',
            options: {
              hotspot: true
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption'
              },
              {
                name: 'alt',
                type: 'string',
                title: 'Alt text'
              }
            ]
          }
        ]
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      }
    ],
    orderings: [
      {
        title: 'Publication Date, New',
        name: 'publishedAtDesc',
        by: [
          {field: 'publishedAt', direction: 'desc'}
        ]
      }
    ],
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
        publishedAt: 'publishedAt'
      },
      prepare({title, media, publishedAt}) {
        return {
          title,
          media,
          subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Draft'
        }
      }
    }
  }