//components
import { useState } from "react";
import { Avatar } from "./Avatar";

//css
import styles from './Comment.module.css';

//assets
import { ThumbsUp, Trash } from 'phosphor-react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment({content,onDeleteComment}:CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state => {
            return state + 1 ;
        }));
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/kissyalone.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jhonata Souza</strong>
                            <time title='11 de fevereiro as 16:14h'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
                
            </div>
        </div>
    );
}