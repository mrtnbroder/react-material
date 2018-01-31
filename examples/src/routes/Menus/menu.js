export default [
  {
    type: 'item',
    primary: 'Bold',
    secondary: '⌘B',
    key: 0,
  },
  {
    type: 'item',
    primary: 'Italic',
    secondary: '⌘I',
    key: 1,
  },
  {
    type: 'item',
    primary: 'Underline',
    secondary: '⌘U',
    key: 2,
  },
  {
    type: 'item',
    primary: 'Strikethrough',
    secondary: 'Alt+Shift+5',
    key: 3,
  },
  {
    type: 'divider',
    nested: true,
    key: 4,
  },
  {
    type: 'item',
    primary: 'Paragraph styles',
    key: 5,
  },
  {
    type: 'item',
    primary: 'Align',
    key: 6,
  },
  {
    type: 'menu-item',
    primary: 'Line spacing',
    secondary: '1.2',
    cascading: true,
    menuItems: [
      {
        type: 'item',
        spacer: true,
        primary: 'Single',
        key: 0,
      },
      {
        type: 'item',
        spacer: true,
        primary: '1.15',
        key: 1,
      },
      {
        type: 'item',
        spacer: true,
        primary: 'Double',
        key: 2,
      },
      {
        type: 'menu-item',
        primary: 'Custom: 1.2',
        cascading: true,
        secondary: {
          type: 'icon',
          icon: 'arrow_right',
          classes: 'material-icons md-24 md-dark',
        },
        spacer: {
          type: 'spacer',
          text: {
            type: 'icon',
            icon: 'check',
            classes: 'material-icons md-24 md-dark',
          },
        },
        menuItems: [
          {
            type: 'item',
            primary: 'Line Spacing',
            secondary: '1.2',
            key: 0,
          },
          {
            type: 'item',
            primary: 'Paragraph spacing before',
            secondary: '1.2',
            key: 1,
          },
          {
            type: 'item',
            primary: 'Paragraph spacing after',
            secondary: '1.5',
            key: 2,
          },
        ],
        key: 3,
      },
      {
        type: 'divider',
        nested: true,
        key: 4,
      },
      {
        type: 'item',
        primary: 'Add space before paragraph',
        key: 5,
      },
      {
        type: 'item',
        primary: 'Add space after paragraph',
        key: 6,
      },
      {
        type: 'divider',
        nested: true,
        key: 7,
      },
      {
        type: 'item',
        primary: 'Custom spacing…',
        key: 8,
      },
    ],
    key: 7,
  },
  {
    type: 'item',
    primary: 'Numbered list',
    key: 8,
  },
  {
    type: 'menu-item',
    primary: 'List options',
    secondary: {
      type: 'icon',
      icon: 'arrow_right',
      classes: 'material-icons md-24 md-dark',
    },
    menuItems: [
      {
        type: 'item',
        spacer: true,
        primary: 'Single',
        key: 0,
      },
      {
        type: 'item',
        spacer: true,
        primary: '1.15',
        key: 1,
      },
      {
        type: 'item',
        spacer: true,
        primary: 'Double',
        key: 2,
      },
      {
        type: 'menu-item',
        primary: 'Custom: 1.2',
        cascading: true,
        secondary: {
          type: 'icon',
          icon: 'arrow_right',
          classes: 'material-icons md-24 md-dark',
        },
        spacer: {
          type: 'spacer',
          text: {
            type: 'icon',
            icon: 'check',
            classes: 'material-icons md-24 md-dark',
          },
        },
        menuItems: [
          {
            type: 'item',
            primary: 'Line Spacing',
            secondary: '1.2',
            key: 0,
          },
          {
            type: 'item',
            primary: 'Paragraph spacing before',
            secondary: '1.2',
            key: 1,
          },
          {
            type: 'item',
            primary: 'Paragraph spacing after',
            secondary: '1.5',
            key: 2,
          },
        ],
        key: 3,
      },
      {
        type: 'divider',
        nested: true,
        key: 4,
      },
      {
        type: 'item',
        primary: 'Add space before paragraph',
        key: 5,
      },
      {
        type: 'item',
        primary: 'Add space after paragraph',
        key: 6,
      },
      {
        type: 'divider',
        nested: true,
        key: 7,
      },
      {
        type: 'item',
        primary: 'Custom spacing…',
        key: 8,
      },
    ],
    key: 9,
  },
  {
    type: 'divider',
    nested: true,
    key: 10,
  },
  {
    type: 'item',
    primary: 'Clear formatting',
    secondary: '⌘/',
    key: 11,
  },
]
