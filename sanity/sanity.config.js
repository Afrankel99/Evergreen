import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { deskTool } from 'sanity/desk';
import { TbSettings } from 'react-icons/tb';

export default defineConfig({
  name: 'default',
  title: 'Evergreen',

  projectId: 'bn5hg3yh',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter((listItem) => {
              if (listItem.getId() === 'media.tag') return false;
              return !['settings'].includes(listItem.getId());
            }),
            S.divider(),
            // Settings
            S.listItem()
              .title('Settings')
              .child(S.document().schemaType('settings').documentId('settings'))
              .icon(TbSettings),
          ]),
    }),
    visionTool(),
  ],
});
