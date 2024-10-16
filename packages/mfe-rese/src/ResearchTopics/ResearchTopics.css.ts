import { css } from '@emotion/react';

export const style = css`
    .container {
        position: relative;
        margin: 0 auto;
    }

    .project-card-container {
        z-index: 40;
        position: relative;
        margin-bottom: 3rem;
    }

    .ResearchTopics_header-container {
        padding: 2rem;
        display: flex;
    }

    .ResearchTopics_topics-container {
        margin-top: 15rem;
    }

    .DynamicIcon_container {
        position: relative;
    }

    .DynamicIcon_icon {
        position: absolute;
        left: -120px;
        z-index: -1;
        top: 50px;
    }
`;
