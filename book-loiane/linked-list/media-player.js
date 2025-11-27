class MediaPlayerSong {
    constructor(songTitle) {
        this.songTitle = songTitle;
        this.previous = null;
        this.next = null;
    }
}

class MediaPlayer {
    #firstSong;
    #lastSong;
    #size = 0;
    #playingSong;

    #insertEmptyPlayList(newSong) {
        this.#firstSong = newSong;
        this.#lastSong = newSong;
        newSong.next = newSong;
        newSong.previous = newSong;
    }

    #findIndexOfSortedSong(newSongTitle) {
        let currentSong = this.#firstSong;
        let i = 0;
        for (; i < this.#size && currentSong; i++) {
            const currentSongTitle = currentSong.songTitle;
            if (this.#compareSongs(currentSongTitle, newSongTitle) === 0) {
                return i;
            }
            currentSong = currentSong.next;
        }
        return 0;
    }

    #compareSongs(songTitle1, songTitle2) {
        return songTitle1.localeCompare(songTitle2);
    }

    #insertAtBeginning(newSong) {
        newSong.next = this.#firstSong;
        newSong.previous = this.#lastSong;
        this.#firstSong.previous = newSong;
        this.#lastSong.next = newSong;
        this.#firstSong = newSong;
    }

    #insertAtEnd(newSong) {
        newSong.next = this.#firstSong;
        newSong.previous = this.#lastSong;
        this.#lastSong.next = newSong;
        this.#firstSong.previous = newSong;
        this.#lastSong = newSong;
    }

    #insertInMiddle(newSong, position) {
        let currentSong = this.#firstSong;
        for (let i = 0; 1 < position - 1; i++) {
            currentSong = current.next;
        }
        newSong.next = currentSong.next;
        newSong.previous = currentSong;
        currentSong.next.previous = newSong;
        currentSong.next = newSong;
    }

    addSongByTitle(newSongTitle) {
        const newSong = new MediaPlayerSong(newSongTitle);
        if (this.#size === 0) {
            this.#insertEmptyPlayList(newSong);
        } else {
            const position = this.#findIndexOfSortedSong(newSongTitle);
            if (position === 0) {
                this.#insertAtBeginning(newSong);
            } else if (position === this.#size) {
                this.#insertAtEnd(newSong);
            } else {
                this.#insertInMiddle(newSong, position);
            }
        }
        this.#size++;
    }

    play() {
        if (this.#size === 0) {
            return null;
        }
        this.#playingSong = this.#firstSong;
        return this.#playingSong.songTitle;
    }

    next() {
        if (this.#size === 0) {
            return null;
        }
        if (!this.#playingSong) {
            return this.play();
        }
        this.#playingSong = this.#playingSong.next;
        return this.#playingSong.songTitle;
    }

    previous() {
        if (this.#size === 0) {
            return null;
        }
        if (!this.#playingSong) {
            return this.play();
        }
        this.#playingSong = this.#playingSong.previous;
        return this.#playingSong.songTitle;
    }
}

const mediaPlayer = new MediaPlayer();

mediaPlayer.addSongByTitle("The Bard's Song");
mediaPlayer.addSongByTitle('Florida!!!');
mediaPlayer.addSongByTitle('Run to the Hills');
mediaPlayer.addSongByTitle('Nothing Else Matters');

console.log('Playing:', mediaPlayer.play());
console.log('Playing:', mediaPlayer.next());
console.log('Playing:', mediaPlayer.next());
console.log('Playing:', mediaPlayer.next());
console.log('Playing:', mediaPlayer.next());
console.log('Playing:', mediaPlayer.previous());
