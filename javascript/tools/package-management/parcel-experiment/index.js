import {
    formatDistanceToNow
} from 'date-fns'

const date = '1989-08-14 10:00:00';
document.body.textContent = formatDistanceToNow(new Date(date)) + ' ago';