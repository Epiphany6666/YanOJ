package com.yupi.yanoj.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yupi.yanoj.model.entity.Question;
import com.yupi.yanoj.service.QuestionService;
import com.yupi.yanoj.mapper.QuestionMapper;
import org.springframework.stereotype.Service;

/**
* @author 52837
* @description 针对表【question(题目)】的数据库操作Service实现
* @createDate 2024-06-13 08:06:06
*/
@Service
public class QuestionServiceImpl extends ServiceImpl<QuestionMapper, Question>
    implements QuestionService{

}




