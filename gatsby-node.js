exports.createPages = async ({ actions, graphql, reporter }) => {
    const response = await graphql(`
        query {
            allDatoCmsRoom {
                nodes {
                    slug
                }
            }
        }
    `);

    if (response.errors) {
        reporter.panic('No results: ', response.errors);
    }

    // IF there exists rooms
    const rooms = response.data.allDatoCmsRoom.nodes;

    rooms.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/rooms.js'),
            context: {
                slug: room.slug
            }
        });
    });
}