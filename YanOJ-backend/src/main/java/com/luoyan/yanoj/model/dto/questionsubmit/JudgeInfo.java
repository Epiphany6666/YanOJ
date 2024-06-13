package com.luoyan.yanoj.model.dto.questionsubmit;

/**
 * 题目判题信息
 */
public class JudgeInfo {

    /**
     * 程序执行信息
     */
    private String message;

    /**
     * 消耗内存
     */
    private Long memory;

    /**
     * 消耗时间（KB）
     */
    private Long stackLimit;
}
