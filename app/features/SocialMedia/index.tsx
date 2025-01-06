import classNames from 'classnames';

interface SocialMediaProps {
  className?: string;
}

function SocialMedia({ className }: SocialMediaProps) {
  return (
    <div className={classNames('flex space-x-4 font-bold', className)}>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
        Telegram
      </a>
    </div>
  );
}

export default SocialMedia;
