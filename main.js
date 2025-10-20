onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  $(document).ready(function () {
            var envelope = $("#envelope");
            var btn_open = $("#open");
            var btn_reset = $("#reset");
            var modal = $("#letter-modal");
            var typewriterContainer = $("#typewriter-text");
            var typingTimer;

            var letterLines = [
             "Hôm Nay Là Ngày 20/10 Là Ngày Phụ Nữ Việt Nam!💐",
            "💌Chúng Tớ Xin Chúc Các Bạn Nữ YK25C Mau Ăn Chóng Lớn Và Ngoan Ngoãn.Chúc Các Bạn Luôn Luôn Hạnh Phúc Và Luôn Nở Nụ Cười Trên Môi Nhé Và Đặc Biệt Là Không Được Suy Nghĩ Gì Tiêu Cực Nhé 💕",
            "💌 Đặc Biệt Là Chúc Các Bạn Nữ Ngày Càng Trở Nên Xinh Đẹp Hơn,Gặp Thật Nhiều May Mắn Trong Cuộc Sống Nhé💕 ",
            "💌 Và Đặc Biệt Là Chúc Các Bạn Sớm Đạt Ước Mơ Của Mình , Có Tất Cả Nhưng TRừ Vất Vả Ra Nhéeeeee  💕"
        ];
    
            envelope.click(function () {
                openEnvelope();
            });
            btn_open.click(function () {
                openEnvelope();
            });
            btn_reset.click(function () {
                closeEnvelope();
            });

            $("#close-modal").click(function () {
                closeModal();
            });

            $(".modal-backdrop").click(function () {
                closeModal();
            });

            function openEnvelope() {
                envelope.addClass("open").removeClass("close");
                // Mở modal sau khi envelope mở (0.5s delay)
                setTimeout(function() {
                    showModal();
                }, 500);
            }

            function closeEnvelope() {
                envelope.addClass("close").removeClass("open");
                closeModal();
            }

            function showModal() {
                modal.fadeIn(300);
                startTypewriter();
            }

            function closeModal() {
                modal.fadeOut(300);
                stopTypewriter();
                typewriterContainer.html("");
            }

            function stopTypewriter() {
                if (typingTimer) {
                    clearTimeout(typingTimer);
                    typingTimer = null;
                }
            }

            function startTypewriter() {
                stopTypewriter();
                typewriterContainer.html('<span class="caret"></span>');
                
                var lineIndex = 0;
                var charIndex = 0;
                var currentLine = "";

                function typeNextChar() {
                    if (lineIndex < letterLines.length) {
                        currentLine = letterLines[lineIndex];
                        
                        if (charIndex < currentLine.length) {
                            var char = currentLine.charAt(charIndex);
                            var caretEl = typewriterContainer.find(".caret");
                            caretEl.before(char);
                            charIndex++;
                            
                            var speed = char === ' ' ? 10 : 30 + Math.floor(Math.random() * 20);
                            typingTimer = setTimeout(typeNextChar, speed);
                        } else {
                            // Xong một dòng, thêm <br> và chuyển sang dòng mới
                            var caretEl = typewriterContainer.find(".caret");
                            caretEl.before("<br>");
                            lineIndex++;
                            charIndex = 0;
                            typingTimer = setTimeout(typeNextChar, 200); // Delay giữa các dòng
                        }
                    }
                }

                typeNextChar();
            }

        })
