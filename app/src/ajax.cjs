import axios from 'axios';

const API_BASE = 'http://localhost:1337/';
const API_KEY = '61ae0b9b4590179b5806ac760f52157dc7ca06888de1dc42198973f3c66b45193c3b794d881ec36682f4864d41da259de8c0ebff455d5debbd9da35ad3906839fb99a4a6e5d36eac3c106fdc71eeb79f51b32a17a1e3e230dae40d5738f8133994744a298a43cebb963b9973e973afeff5ac0fdf287bb28064d27deb12d2f3b4';

const fetchData = async (endpoint, isImage = false, mediaFileName = '') => {
    const url = `${API_BASE}api/${endpoint}${isImage ? '?populate=*' : ''}`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });

        if (isImage) {
            const imageUrl = `${API_BASE}${response.data.data.attributes[mediaFileName].data.attributes.url.replace(/^\/+/, '')}`;
            return imageUrl;
        } else {
            return response.data.data.attributes;
        }
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

const fetchTitles = async (endpoint) => {
    const url = `${API_BASE}api/${endpoint}`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });

        const titles = response.data.data.map(item => ({
            title: item.attributes.title,
            subtitle: item.attributes.subtitle
        }));

        return titles[0]; 
    } catch (error) {
        throw new Error(`Error fetching titles: ${error.message}`);
    }
};
const fetchArtInfoBoxes = async (endpoint) => {
    const url = `${API_BASE}api/${endpoint}?populate=*`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });

        const artInfoBoxes = response.data.data.map(item => ({
            id: item.id,
            title: item.attributes.title,
            description: item.attributes.description,
            imageUrl: `${API_BASE}${item.attributes.image.data.attributes.url.replace(/^\/+/, '')}`
        }));

        return artInfoBoxes;
    } catch (error) {
        throw new Error(`Error fetching art info boxes: ${error.message}`);
    }
};

const fetchImageCarousel = async (endpoint) => {
    const url = `${API_BASE}api/${endpoint}?populate=*`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });

        const images = response.data.data.attributes.images.data.map(item => ({
            src: `${API_BASE}${item.attributes.url.replace(/^\/+/, '')}`,
            alt: item.attributes.alternativeText,
            caption: item.attributes.caption,
            description: item.attributes.description
        }));

        return images;
    } catch (error) {
        throw new Error(`Error fetching image carousel: ${error.message}`);
    }
};
const fetchGame = async (endpoint) => {
    const url = `${API_BASE}api/${endpoint}?populate=*`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });

        const gameUrl = `${API_BASE}${response.data.data.attributes.game.data.attributes.url.replace(/^\/+/, '')}`;
        return gameUrl;
    } catch (error) {
        throw new Error(`Error fetching game: ${error.message}`);
    }
};
const fetchNewsArticles = async (endpoint) => {
    const url = `${API_BASE}api/${endpoint}?populate=*`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });

        const newsArticles = response.data.data.map(item => ({
            id: item.id,
            title: item.attributes.title,
            subtitle: item.attributes.subtitle,
            imageAltText: item.attributes.imageAltText,
            datePublished: item.attributes.publicationDate,
            longDescription: item.attributes.article.map(paragraph => paragraph.children.map(child => child.text).join(' ')).join('\n\n'),
            imageUrl: `${API_BASE}${item.attributes.image.data.attributes.url.replace(/^\/+/, '')}`
        }));

        return newsArticles;
    } catch (error) {
        throw new Error(`Error fetching news articles: ${error.message}`);
    }
};

const fetchTeamGroups = async (endpoint) => {
    const url = `${API_BASE}api/${endpoint}?populate[founders][populate]=*&populate[developers][populate]=*&populate[designers][populate]=*&populate[narrative][populate]=*&populate[UIUX][populate]=*&populate[artists][populate]=*&populate[pms][populate]=*`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });

        // console.log('API Response:', response.data.data[0].attributes.artists.data[0].attributes.headshot.data.attributes.url);

        const parseMembers = (members) => {
            if (!members || !members.data) {
                console.warn('Members data is undefined or null:', members);
                return [];
            }

            return members.data.map(member => ({
                id: member.id,
                name: member.attributes.Name,
                role: member.attributes.Role,
                dates: member.attributes.Dates,
                description: member.attributes.Description,
                displayOrder: member.attributes.displayOrder,
                headshot: `${API_BASE}${member.attributes.headshot.data.attributes.url.replace(/^\/+/, '')}`,
            })).sort((a, b) => a.displayOrder - b.displayOrder);
        };

        const teamGroups = response.data.data.map(group => ({
            id: group.id,
            createdAt: group.attributes.createdAt,
            updatedAt: group.attributes.updatedAt,
            publishedAt: group.attributes.publishedAt,
            founders: parseMembers(group.attributes.founders),
            developers: parseMembers(group.attributes.developers),
            designers: parseMembers(group.attributes.designers),
            narrative: parseMembers(group.attributes.narrative),
            UIUX: parseMembers(group.attributes.UIUX),
            artists: parseMembers(group.attributes.artists),
            pms: parseMembers(group.attributes.pms),
        }));

     //   console.log('Parsed Team Groups:', teamGroups);
        return teamGroups;
    } catch (error) {
        console.error('Error fetching team groups:', error);
        throw new Error(`Error fetching team groups: ${error.message}`);
    }
};

export {
    fetchData,
    fetchTitles,
    fetchArtInfoBoxes,
    fetchImageCarousel,
    fetchGame,
    fetchNewsArticles,
    fetchTeamGroups
};
